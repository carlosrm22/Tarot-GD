import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import { ImageInfo, CategoryInfo, Categories, CategoryKey } from '../types/images';

const Simbolos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageInfo[]>([]);

  const categories: Categories = {
    todos: {
      title: 'Todos',
      path: '',
      publicPath: ''
    },
    pentagramas: {
      title: 'Pentagramas',
      path: '/images/Pentagramas',
      publicPath: `${process.env.PUBLIC_URL}/images/Pentagramas`
    },
    hexagramas: {
      title: 'Hexagramas',
      path: '/images/Hexagramas',
      publicPath: `${process.env.PUBLIC_URL}/images/Hexagramas`
    },
    sigilos: {
      title: 'Sigilos',
      path: '/images/Sigilos',
      publicPath: `${process.env.PUBLIC_URL}/images/Sigilos`
    },
    talismanes: {
      title: 'Talismanes',
      path: '/images/Talismanes',
      publicPath: `${process.env.PUBLIC_URL}/images/Talismanes`
    }
  };

  // Función auxiliar para crear rutas de imágenes
  const createImagePath = (relativePath: string) => {
    return {
      path: relativePath,
      publicPath: `${process.env.PUBLIC_URL}${relativePath}`
    };
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const mockImages: ImageInfo[] = [
          // Pentagramas Elementales
          {
            name: 'Pentagrama de Tierra',
            ...createImagePath('/images/Pentagramas/Tierra Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de invocación de tierra',
            tags: ['tierra', 'ritual', 'invocación', 'elemental']
          },
          {
            name: 'Pentagrama de Aire',
            ...createImagePath('/images/Pentagramas/Aire Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de invocación de aire',
            tags: ['aire', 'ritual', 'invocación', 'elemental']
          },
          {
            name: 'Pentagrama de Fuego',
            ...createImagePath('/images/Pentagramas/Fuego Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de invocación de fuego',
            tags: ['fuego', 'ritual', 'invocación', 'elemental']
          },
          {
            name: 'Pentagrama de Agua',
            ...createImagePath('/images/Pentagramas/Agua Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de invocación de agua',
            tags: ['agua', 'ritual', 'invocación', 'elemental']
          },
          {
            name: 'Pentagrama del Espíritu Activo',
            ...createImagePath('/images/Pentagramas/Espíritu Activo.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales del espíritu activo',
            tags: ['espíritu', 'ritual', 'activo', 'elemental']
          },
          {
            name: 'Pentagrama del Espíritu Pasivo',
            ...createImagePath('/images/Pentagramas/Espíritu Pasivo.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales del espíritu pasivo',
            tags: ['espíritu', 'ritual', 'pasivo', 'elemental']
          },
          // Pentagramas Zodiacales
          {
            name: 'Pentagrama de Aries',
            ...createImagePath('/images/Pentagramas/Aries Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Aries',
            tags: ['aries', 'ritual', 'zodiacal', 'fuego']
          },
          {
            name: 'Pentagrama de Tauro',
            ...createImagePath('/images/Pentagramas/Tauro Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Tauro',
            tags: ['tauro', 'ritual', 'zodiacal', 'tierra']
          },
          {
            name: 'Pentagrama de Géminis',
            ...createImagePath('/images/Pentagramas/Géminis Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Géminis',
            tags: ['géminis', 'ritual', 'zodiacal', 'aire']
          },
          {
            name: 'Pentagrama de Cáncer',
            ...createImagePath('/images/Pentagramas/Cáncer Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Cáncer',
            tags: ['cáncer', 'ritual', 'zodiacal', 'agua']
          },
          {
            name: 'Pentagrama de Leo',
            ...createImagePath('/images/Pentagramas/Leo Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Leo',
            tags: ['leo', 'ritual', 'zodiacal', 'fuego']
          },
          {
            name: 'Pentagrama de Virgo',
            ...createImagePath('/images/Pentagramas/Virgo Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Virgo',
            tags: ['virgo', 'ritual', 'zodiacal', 'tierra']
          },
          {
            name: 'Pentagrama de Libra',
            ...createImagePath('/images/Pentagramas/Libra Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Libra',
            tags: ['libra', 'ritual', 'zodiacal', 'aire']
          },
          {
            name: 'Pentagrama de Escorpio',
            ...createImagePath('/images/Pentagramas/Escorpión Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Escorpio',
            tags: ['escorpio', 'ritual', 'zodiacal', 'agua']
          },
          {
            name: 'Pentagrama de Sagitario',
            ...createImagePath('/images/Pentagramas/Sagitario Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Sagitario',
            tags: ['sagitario', 'ritual', 'zodiacal', 'fuego']
          },
          {
            name: 'Pentagrama de Capricornio',
            ...createImagePath('/images/Pentagramas/Capricornio Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Capricornio',
            tags: ['capricornio', 'ritual', 'zodiacal', 'tierra']
          },
          {
            name: 'Pentagrama de Acuario',
            ...createImagePath('/images/Pentagramas/Acuario Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Acuario',
            tags: ['acuario', 'ritual', 'zodiacal', 'aire']
          },
          {
            name: 'Pentagrama de Piscis',
            ...createImagePath('/images/Pentagramas/Piscis Invocación.png'),
            category: 'pentagramas',
            description: 'Pentagrama para rituales de Piscis',
            tags: ['piscis', 'ritual', 'zodiacal', 'agua']
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
    const category = Object.entries(categories).find(([_, { title }]) => title === filter)?.[0] as CategoryKey;
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
        Símbolos Mágicos
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
        placeholder="Buscar símbolos por nombre, descripción o etiquetas..."
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
            No se encontraron símbolos que coincidan con tu búsqueda
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Simbolos;