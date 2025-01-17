import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import { ImageInfo, CategoryInfo, Categories, ToolCategoryKey } from '../types/images';

const HerramientasMagicas: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategoryKey>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageInfo[]>([]);

  const categories: Categories = {
    todos: {
      title: 'Todas',
      path: '',
      publicPath: ''
    },
    armas: {
      title: 'Armas Mágicas',
      path: '/images/Armas',
      publicPath: `${process.env.PUBLIC_URL}/images/Armas`
    },
    tatvas: {
      title: 'Tatvas',
      path: '/images/Tatvas',
      publicPath: `${process.env.PUBLIC_URL}/images/Tatvas`
    },
    formasDivinas: {
      title: 'Formas Divinas',
      path: '/images/Formas Divinas',
      publicPath: `${process.env.PUBLIC_URL}/images/Formas Divinas`
    }
  };

  // Función auxiliar para crear rutas de imágenes
  const createImagePath = (relativePath: string) => {
    return {
      path: relativePath,
      publicPath: `${process.env.PUBLIC_URL}${relativePath}`
    };
  };

  // Simular carga de imágenes (esto se reemplazará con datos reales)
  useEffect(() => {
    const loadImages = async () => {
      try {
        const mockImages: ImageInfo[] = [
          {
            name: 'Vara de Fuego',
            ...createImagePath('/images/Armas/Vara de Fuego.jpg'),
            category: 'armas',
            description: 'Vara consagrada al elemento fuego',
            element: 'Fuego',
            useCase: 'Rituales de invocación y banishing',
            tags: ['fuego', 'vara', 'ritual', 'invocación']
          },
          {
            name: 'Daga de Aire',
            ...createImagePath('/images/Armas/Daga de Aire.png'),
            category: 'armas',
            description: 'Daga consagrada al elemento aire',
            element: 'Aire',
            useCase: 'Rituales de aire y purificación',
            tags: ['aire', 'daga', 'ritual', 'purificación']
          },
          {
            name: 'Copa de Agua',
            ...createImagePath('/images/Armas/Copa de Agua.jpg'),
            category: 'armas',
            description: 'Copa consagrada al elemento agua',
            element: 'Agua',
            useCase: 'Rituales de agua y consagración',
            tags: ['agua', 'copa', 'ritual', 'consagración']
          },
          {
            name: 'Vara de Loto',
            ...createImagePath('/images/Armas/Vara de Loto.jpg'),
            category: 'armas',
            description: 'Vara especial con símbolo de loto',
            element: 'Espíritu',
            useCase: 'Rituales espirituales y meditación',
            tags: ['espíritu', 'vara', 'ritual', 'meditación']
          },
          {
            name: 'Vara de Fénix',
            ...createImagePath('/images/Armas/Vara de Fénix.jpg'),
            category: 'armas',
            description: 'Vara con símbolo del fénix',
            element: 'Fuego',
            useCase: 'Rituales de transformación y renacimiento',
            tags: ['fuego', 'vara', 'ritual', 'transformación']
          }
        ];
        setImages(mockImages);
      } catch (error) {
        console.error('Error cargando imágenes:', error);
      }
    };

    loadImages();
  }, []);

  // Filtrar imágenes basado en la búsqueda, categoría y tag
  useEffect(() => {
    let filtered = [...images];

    // Filtrar por categoría
    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(img =>
        img.name.toLowerCase().includes(searchLower) ||
        img.description?.toLowerCase().includes(searchLower) ||
        img.element?.toLowerCase().includes(searchLower) ||
        img.useCase?.toLowerCase().includes(searchLower) ||
        img.tags?.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Filtrar por tag seleccionado
    if (selectedTag) {
      filtered = filtered.filter(img =>
        img.tags?.includes(selectedTag)
      );
    }

    setFilteredImages(filtered);
  }, [images, selectedCategory, searchTerm, selectedTag]);

  const handleFilterChange = (filter: string) => {
    const category = Object.entries(categories).find(([_, { title }]) => title === filter)?.[0] as ToolCategoryKey;
    setSelectedCategory(category || 'todos');
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null); // Deseleccionar el tag si ya está seleccionado
    } else {
      setSelectedTag(tag);
      setSelectedCategory('todos'); // Resetear la categoría al filtrar por tag
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4"
    >
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800 dark:text-purple-400">
        Herramientas Mágicas
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
        placeholder="Buscar herramientas por nombre, elemento o uso..."
      />

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
                {image.element && (
                  <p className="text-sm text-purple-600 dark:text-purple-300 mt-2">
                    <strong>Elemento:</strong> {image.element}
                  </p>
                )}
                {image.useCase && (
                  <p className="text-sm text-purple-600 dark:text-purple-300">
                    <strong>Uso:</strong> {image.useCase}
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
            No se encontraron herramientas que coincidan con tu búsqueda
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HerramientasMagicas;