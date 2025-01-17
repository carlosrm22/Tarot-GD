import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnochianTable, EnochianCall, EnochianCategoryKey, ENOCHIAN_CATEGORIES, MOCK_TABLES, MOCK_CALLS } from '../data/enochian';
import EnochianTableComponent from './enochian/EnochianTable';
import EnochianCallComponent from './enochian/EnochianCall';
import EnochianDetails from './enochian/EnochianDetails';
import SearchBar from './SearchBar';

const Enoquiano: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EnochianCategoryKey>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<EnochianTable | EnochianCall | null>(null);

  // Filtrar elementos según la categoría y término de búsqueda
  const filteredItems = React.useMemo(() => {
    const tables = selectedCategory === 'todos' || selectedCategory === 'tablas' ? MOCK_TABLES : [];
    const calls = selectedCategory === 'todos' || selectedCategory === 'llamadas' ? MOCK_CALLS : [];

    const searchLower = searchTerm.toLowerCase();

    return {
      tables: tables.filter(table =>
        table.title.toLowerCase().includes(searchLower) ||
        table.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        (table.elemento?.toLowerCase().includes(searchLower) ?? false)
      ),
      calls: calls.filter(call =>
        call.titulo.toLowerCase().includes(searchLower) ||
        call.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        call.texto_original.toLowerCase().includes(searchLower) ||
        call.traduccion.toLowerCase().includes(searchLower)
      )
    };
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-twilight-secondary/20 shadow-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
          Sistema Enoquiano
        </h1>
        <p className="text-lg sm:text-xl text-twilight-text leading-relaxed max-w-2xl mx-auto">
          Explora las tablas y llamadas del sistema mágico enoquiano, un lenguaje angélico
          revelado a John Dee y Edward Kelley en el siglo XVI.
        </p>
      </div>

      {/* Controles */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex gap-2 w-full sm:w-auto">
            {Object.entries(ENOCHIAN_CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key as EnochianCategoryKey)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === key
                    ? 'bg-twilight-accent text-white'
                    : 'bg-twilight-secondary/10 hover:bg-twilight-secondary/20'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Buscar por nombre, elemento o etiqueta..."
            className="w-full sm:w-96"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto">
        {/* Tablas */}
        {filteredItems.tables.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Tablas Enoquianas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredItems.tables.map(table => (
                <EnochianTableComponent
                  key={table.id}
                  table={table}
                  onClick={() => setSelectedItem(table)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Llamadas */}
        {filteredItems.calls.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gradient">Llamadas Enoquianas</h2>
            <div className="grid grid-cols-1 gap-6">
              {filteredItems.calls.map(call => (
                <EnochianCallComponent
                  key={call.id}
                  call={call}
                  onClick={() => setSelectedItem(call)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal de detalles */}
        <EnochianDetails
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </div>
  );
};

export default Enoquiano;