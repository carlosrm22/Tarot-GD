import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import { ImageInfo, CategoryInfo, Categories } from '../types/images';

type EnochianCategoryKey = 'todos' | 'tablas' | 'llamadas';

const Enoquiano: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EnochianCategoryKey>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageInfo[]>([]);
  const [llamadas, setLlamadas] = useState<any[]>([]);
  const [showingLlamada, setShowingLlamada] = useState<boolean>(false);
  const [selectedLlamada, setSelectedLlamada] = useState<any>(null);

  const categories: Categories = {
    todos: {
      title: 'Todo',
      path: '',
      publicPath: ''
    },
    tablas: {
      title: 'Tablas Enoquianas',
      path: '/images/Tablas Enoquianas',
      publicPath: `${process.env.PUBLIC_URL}/images/Tablas Enoquianas`
    },
    llamadas: {
      title: 'Llamadas Enoquianas',
      path: '/data/enoquiano.json',
      publicPath: `${process.env.PUBLIC_URL}/data/enoquiano.json`
    }
  };

  // Función auxiliar para crear rutas de imágenes
  const createImagePath = (relativePath: string) => {
    return {
      path: relativePath,
      publicPath: `${process.env.PUBLIC_URL}${relativePath}`
    };
  };

  // Cargar imágenes y llamadas
  useEffect(() => {
    const loadImages = async () => {
      try {
        const mockImages: ImageInfo[] = [
          // Tablas Enoquianas
          {
            name: 'Tabla de la Gran Cruz',
            ...createImagePath('/images/Tablas Enoquianas/Gran Cruz.png'),
            category: 'tablas',
            description: 'La Gran Cruz Central del Sistema Enoquiano',
            tags: ['cruz', 'central', 'enoquiano']
          },
          {
            name: 'Tabla del Aire',
            ...createImagePath('/images/Tablas Enoquianas/Tabla del Aire.png'),
            category: 'tablas',
            description: 'Tabla Elemental del Aire',
            tags: ['aire', 'elemental', 'enoquiano']
          },
          {
            name: 'Tabla del Fuego',
            ...createImagePath('/images/Tablas Enoquianas/Tabla del Fuego.png'),
            category: 'tablas',
            description: 'Tabla Elemental del Fuego',
            tags: ['fuego', 'elemental', 'enoquiano']
          },
          {
            name: 'Tabla del Agua',
            ...createImagePath('/images/Tablas Enoquianas/Tabla del Agua.png'),
            category: 'tablas',
            description: 'Tabla Elemental del Agua',
            tags: ['agua', 'elemental', 'enoquiano']
          },
          {
            name: 'Tabla de la Tierra',
            ...createImagePath('/images/Tablas Enoquianas/Tabla de la Tierra.png'),
            category: 'tablas',
            description: 'Tabla Elemental de la Tierra',
            tags: ['tierra', 'elemental', 'enoquiano']
          },
          {
            name: 'Alfabeto Enoquiano',
            ...createImagePath('/images/Tablas Enoquianas/Alfabeto Enoquiano.png'),
            category: 'tablas',
            description: 'Alfabeto y caracteres del sistema Enoquiano',
            tags: ['alfabeto', 'letras', 'enoquiano']
          }
        ];
        setImages(mockImages);

        // Cargar las llamadas desde el archivo JSON
        const response = await fetch(`${process.env.PUBLIC_URL}/data/enoquiano.json`);
        const data = await response.json();
        setLlamadas(data);
      } catch (error) {
        console.error('Error cargando datos:', error);
      }
    };

    loadImages();
  }, []);

  // Filtrar imágenes y llamadas
  useEffect(() => {
    let filtered = [...images];

    if (selectedCategory === 'llamadas') {
      setShowingLlamada(true);
      const filteredLlamadas = llamadas.filter(llamada => {
        const searchMatch = !searchTerm ||
          llamada.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          llamada.texto_espanol.toLowerCase().includes(searchTerm.toLowerCase()) ||
          llamada.texto_enoquiano.toLowerCase().includes(searchTerm.toLowerCase()) ||
          llamada.texto_ingles.toLowerCase().includes(searchTerm.toLowerCase());

        const tagMatch = !selectedTag ||
          (llamada.atributos && llamada.atributos.some((attr: string) => attr.toLowerCase() === selectedTag.toLowerCase()));

        return searchMatch && tagMatch;
      });
      setFilteredImages([]);
      setSelectedLlamada(filteredLlamadas[0]);
    } else {
      setShowingLlamada(false);
      if (selectedCategory !== 'todos') {
        filtered = filtered.filter(img => img.category === selectedCategory);
      }

      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filtered = filtered.filter(img =>
          img.name.toLowerCase().includes(searchLower) ||
          img.description?.toLowerCase().includes(searchLower) ||
          img.tags?.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }

      if (selectedTag) {
        filtered = filtered.filter(img =>
          img.tags?.includes(selectedTag)
        );
      }

      setFilteredImages(filtered);
    }
  }, [images, selectedCategory, searchTerm, selectedTag, llamadas]);

  const handleFilterChange = (filter: string) => {
    const category = Object.entries(categories).find(([_, { title }]) => title === filter)?.[0] as EnochianCategoryKey;
    setSelectedCategory(category || 'todos');
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
      setSelectedCategory('todos');
    }
  };

  const handleLlamadaClick = (llamada: any) => {
    setSelectedLlamada(llamada);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4"
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800 dark:text-purple-400">
        Sistema Enoquiano
      </h1>

      {selectedTag && (
        <div className="text-center mb-4">
          <span className="text-sm text-purple-600 dark:text-purple-300">
            Filtrando por etiqueta:
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className="ml-2 px-3 py-1 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition-colors"
          >
            {selectedTag} ✕
          </button>
        </div>
      )}

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filters={Object.entries(categories).map(([_, { title }]) => title)}
        selectedFilter={categories[selectedCategory].title}
        onFilterChange={handleFilterChange}
        placeholder="Buscar por nombre, descripción o contenido..."
      />

      {showingLlamada ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Lista de llamadas */}
          <div className="md:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-400">
              Llamadas Enoquianas
            </h2>
            <div className="space-y-2">
              {llamadas.map((llamada, index) => (
                <button
                  key={index}
                  onClick={() => handleLlamadaClick(llamada)}
                  className={`w-full text-left p-2 rounded ${
                    selectedLlamada === llamada
                      ? 'bg-purple-600 text-white'
                      : 'hover:bg-purple-100 dark:hover:bg-purple-900'
                  }`}
                >
                  {llamada.titulo}
                </button>
              ))}
            </div>
          </div>

          {/* Detalle de la llamada seleccionada */}
          {selectedLlamada && (
            <div className="md:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-400">
                {selectedLlamada.titulo}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                    Texto Enoquiano
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {selectedLlamada.texto_enoquiano}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                    Español
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {selectedLlamada.texto_espanol}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-300">
                    English
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {selectedLlamada.texto_ingles}
                  </p>
                </div>
                {selectedLlamada.atributos && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedLlamada.atributos.map((attr: string) => (
                      <button
                        key={attr}
                        onClick={() => handleTagClick(attr)}
                        className={`px-2 py-1 text-sm rounded-full transition-colors ${
                          selectedTag === attr
                            ? 'bg-purple-600 text-white'
                            : 'bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}
                      >
                        {attr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <motion.div
                key={image.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={image.publicPath}
                  alt={image.name}
                  className="w-full h-48 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `${process.env.PUBLIC_URL}/images/placeholder.png`;
                  }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-400">
                    {image.name}
                  </h3>
                  {image.description && (
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {image.description}
                    </p>
                  )}
                  {image.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {image.tags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`px-2 py-1 text-sm rounded-full transition-colors ${
                            selectedTag === tag
                              ? 'bg-purple-600 text-white'
                              : 'bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 dark:text-gray-400">
              No se encontraron elementos que coincidan con tu búsqueda
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Enoquiano;