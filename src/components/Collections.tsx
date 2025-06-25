import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Collections = () => {
  const collections = [
    {
      name: "URBAN CORE",
      description: "Базовая коллекция для городских джунглей",
      modules: ["Капюшон", "Карманы", "Рукава"],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
      gradient: "from-purple-600 to-violet-600",
    },
    {
      name: "TECH FUSION",
      description: "Высокотехнологичная коллекция с умными модулями",
      modules: ["LED-панели", "Нагреватели", "Сенсоры"],
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=600&fit=crop",
      gradient: "from-pink-600 to-purple-600",
    },
    {
      name: "MINIMAL FLOW",
      description: "Минималистичная коллекция для повседневного стиля",
      modules: ["Воротники", "Манжеты", "Пояса"],
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
      gradient: "from-violet-600 to-pink-600",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 gradient-text">
            Коллекции
          </h2>
          <p className="text-xl text-gray-300 font-roboto max-w-2xl mx-auto">
            Каждая коллекция — это экосистема модулей, которые можно
            комбинировать между собой для создания уникальных образов.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {collections.map((collection, index) => (
            <div
              key={collection.name}
              className="group relative overflow-hidden rounded-2xl module-card"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} opacity-60`}
                ></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-montserrat font-bold text-xl mb-2 text-white">
                    {collection.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 font-roboto">
                    {collection.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {collection.modules.map((module) => (
                      <span
                        key={module}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30"
                      >
                        {module}
                      </span>
                    ))}
                  </div>

                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                  >
                    Исследовать
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive module demonstration */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-bold text-2xl mb-4 text-white">
              Интерактивный конструктор
            </h3>
            <p className="text-gray-400 font-roboto">
              Попробуйте создать свою комбинацию модулей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Базовая футболка", icon: "Shirt", active: true },
              { name: "Капюшон", icon: "Crown", active: false },
              { name: "Длинные рукава", icon: "ArrowRight", active: false },
              { name: "Карманы", icon: "Package", active: false },
              { name: "LED-подсветка", icon: "Zap", active: false },
              { name: "Воротник", icon: "Gem", active: false },
            ].map((module) => (
              <div
                key={module.name}
                className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  module.active
                    ? "border-purple-500 bg-purple-500/20"
                    : "border-gray-600 hover:border-purple-400 hover:bg-purple-500/10"
                }`}
              >
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <Icon
                    name={module.icon as any}
                    size={20}
                    className={
                      module.active ? "text-purple-400" : "text-gray-400"
                    }
                  />
                </div>
                <p className="text-xs text-center text-gray-400 font-roboto">
                  {module.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
