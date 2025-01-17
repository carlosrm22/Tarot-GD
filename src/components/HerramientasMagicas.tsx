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
      path: '/images/FormasDivinas',
      publicPath: `${process.env.PUBLIC_URL}/images/FormasDivinas`
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
          // Herramientas Elementales
          {
            name: 'Vara de Fuego',
            ...createImagePath('/images/Armas/Vara de Fuego.jpg'),
            category: 'armas',
            description: 'Herramienta del elemento Fuego, representa la Voluntad',
            tags: ['fuego', 'vara', 'voluntad']
          },
          {
            name: 'Copa de Agua',
            ...createImagePath('/images/Armas/Copa de Agua.jpg'),
            category: 'armas',
            description: 'Herramienta del elemento Agua, representa las Emociones',
            tags: ['agua', 'copa', 'emociones']
          },
          {
            name: 'Daga de Aire',
            ...createImagePath('/images/Armas/Daga de Aire.png'),
            category: 'armas',
            description: 'Herramienta del elemento Aire, representa el Intelecto',
            tags: ['aire', 'daga', 'intelecto']
          },
          {
            name: 'Vara de Loto',
            ...createImagePath('/images/Armas/Vara de Loto.jpg'),
            category: 'armas',
            description: 'Herramienta espiritual, representa la Manifestación Divina',
            tags: ['espíritu', 'vara', 'manifestación']
          },
          {
            name: 'Vara del Fénix',
            ...createImagePath('/images/Armas/Vara de Fénix.jpg'),
            category: 'armas',
            description: 'Herramienta de transformación y renacimiento',
            tags: ['fuego', 'vara', 'transformación']
          },

          // Tatvas Elementales
          {
            name: 'Tatva Tejas',
            ...createImagePath('/images/Tatvas/Tejas.png'),
            category: 'tatvas',
            description: 'Símbolo del elemento Fuego, triángulo rojo',
            tags: ['fuego', 'tejas', 'triángulo']
          },
          {
            name: 'Tatva Apas',
            ...createImagePath('/images/Tatvas/Apas.png'),
            category: 'tatvas',
            description: 'Símbolo del elemento Agua, media luna plateada',
            tags: ['agua', 'apas', 'media luna']
          },
          {
            name: 'Tatva Vayu',
            ...createImagePath('/images/Tatvas/Vayu.png'),
            category: 'tatvas',
            description: 'Símbolo del elemento Aire, círculo azul',
            tags: ['aire', 'vayu', 'círculo']
          },
          {
            name: 'Tatva Prithvi',
            ...createImagePath('/images/Tatvas/Prithvi.png'),
            category: 'tatvas',
            description: 'Símbolo del elemento Tierra, cuadrado amarillo',
            tags: ['tierra', 'prithvi', 'cuadrado']
          },
          {
            name: 'Tatva Akasha',
            ...createImagePath('/images/Tatvas/Akasha.png'),
            category: 'tatvas',
            description: 'Símbolo del elemento Espíritu, óvalo negro',
            tags: ['espíritu', 'akasha', 'óvalo']
          },

          // Formas Divinas
          {
            name: 'Forma de Isis',
            ...createImagePath('/images/Formas Divinas/Iset (Isis).png'),
            category: 'formasDivinas',
            description: 'Forma divina de Isis, diosa egipcia de la magia',
            tags: ['isis', 'egipcia', 'luna']
          },
          {
            name: 'Forma de Osiris',
            ...createImagePath('/images/Formas Divinas/Osiris.png'),
            category: 'formasDivinas',
            description: 'Forma divina de Osiris, dios egipcio de la resurrección',
            tags: ['osiris', 'egipcio', 'resurrección']
          },
          {
            name: 'Forma de Horus',
            ...createImagePath('/images/Formas Divinas/Jru (Horus).png'),
            category: 'formasDivinas',
            description: 'Forma divina de Horus, dios egipcio del sol',
            tags: ['horus', 'egipcio', 'sol']
          },
          {
            name: 'Forma de Thoth',
            ...createImagePath('/images/Formas Divinas/Djehuty.png'),
            category: 'formasDivinas',
            description: 'Forma divina de Thoth, dios egipcio de la sabiduría',
            tags: ['thoth', 'egipcio', 'sabiduría']
          },
          {
            name: 'Forma de Anubis',
            ...createImagePath('/images/Formas Divinas/Anubis prestas.png'),
            category: 'formasDivinas',
            description: 'Forma divina de Anubis, dios egipcio de los muertos',
            tags: ['anubis', 'egipcio', 'muerte']
          },
          {
            name: 'Forma de Ra',
            ...createImagePath('/images/Formas Divinas/Ra.png'),
            category: 'formasDivinas',
            description: 'Forma divina de Ra, dios egipcio del sol',
            tags: ['ra', 'egipcio', 'sol']
          },
          {
            name: 'Forma de Hathor',
            ...createImagePath('/images/Formas Divinas/Jhetjheru (Hator).png'),
            category: 'formasDivinas',
            description: 'Forma divina de Hathor, diosa egipcia del amor',
            tags: ['hathor', 'egipcia', 'amor']
          },
          {
            name: 'Forma de Sekhmet',
            ...createImagePath('/images/Formas Divinas/Sejmet.png'),
            category: 'formasDivinas',
            description: 'Forma divina de Sekhmet, diosa egipcia de la guerra',
            tags: ['sekhmet', 'egipcia', 'guerra']
          },
          {
            name: 'Forma de Nephthys',
            ...createImagePath('/images/Formas Divinas/Neftis.png'),
            category: 'formasDivinas',
            description: 'Forma divina de Nephthys, diosa egipcia protectora',
            tags: ['nephthys', 'egipcia', 'protección']
          },
          {
            name: 'Forma de Maat',
            ...createImagePath('/images/Formas Divinas/Maat.png'),
            category: 'formasDivinas',
            description: 'Forma divina de Maat, diosa egipcia de la verdad',
            tags: ['maat', 'egipcia', 'verdad']
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