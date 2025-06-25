import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-violet-500 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="font-montserrat font-bold text-6xl md:text-8xl mb-6 leading-tight">
            <span className="gradient-text">EVOLVE</span>
            <br />
            <span className="text-white">FASHION</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-roboto font-light">
            Каждый элемент съёмный. Каждый образ уникален.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Революционная модульная одежда будущего. Создавай бесконечные
            комбинации из съёмных элементов и трансформируй свой стиль каждый
            день.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-montserrat font-semibold px-8 py-4 rounded-full neon-glow transition-all duration-300"
            >
              Исследовать коллекцию
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 font-montserrat font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>

          {/* Floating modules preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Рукав", icon: "Shirt" },
              { name: "Капюшон", icon: "Crown" },
              { name: "Карман", icon: "Package" },
              { name: "Воротник", icon: "Gem" },
            ].map((module, index) => (
              <div
                key={module.name}
                className="module-card p-6 rounded-2xl text-center animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon
                    name={module.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-sm text-gray-300">
                  {module.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
