import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Matrix rain effect */}
      <div className="matrix-rain absolute inset-0 opacity-30"></div>

      {/* Holographic particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyber-cyan rounded-full blur-3xl animate-cyber-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyber-magenta rounded-full blur-3xl animate-cyber-float"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyber-electric rounded-full blur-2xl animate-pulse-neon"></div>
        <div
          className="absolute top-1/4 right-1/4 w-28 h-28 bg-cyber-plasma rounded-full blur-3xl animate-cyber-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Data streams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-data-stream"></div>
        <div
          className="absolute top-32 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-magenta to-transparent animate-data-stream"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-electric to-transparent animate-data-stream"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Main heading with glitch effect */}
          <h1 className="font-orbitron font-black text-6xl md:text-8xl mb-6 leading-tight text-center">
            <span className="holographic-text glitch-effect" data-text="EVOLVE">
              EVOLVE
            </span>
            <br />
            <span className="text-white cyber-glow">FASHION</span>
          </h1>

          {/* Subheading with holographic effect */}
          <p className="text-xl md:text-2xl text-cyber-cyan mb-4 font-orbitron font-light animate-holographic-shift">
            Каждый элемент съёмный. Каждый образ уникален.
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-roboto">
            Революционная модульная одежда будущего. Создавай бесконечные
            комбинации из съёмных элементов и трансформируй свой стиль каждый
            день.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-hologram hover:from-cyber-electric hover:to-cyber-plasma text-black font-orbitron font-bold px-8 py-4 rounded-full cyber-glow transition-all duration-300 hover:scale-110 relative overflow-hidden group"
            >
              <span className="relative z-10">Исследовать коллекцию</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-data-stream"></div>
              <Icon
                name="ArrowRight"
                className="ml-2 relative z-10"
                size={20}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/20 font-orbitron font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyber-cyan/50"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>

          {/* Enhanced floating modules */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              {
                name: "Рукав",
                icon: "Shirt",
                color: "from-cyber-cyan to-cyber-plasma",
              },
              {
                name: "Капюшон",
                icon: "Crown",
                color: "from-cyber-magenta to-cyber-hologram",
              },
              {
                name: "Карман",
                icon: "Package",
                color: "from-cyber-electric to-cyber-neon",
              },
              {
                name: "Воротник",
                icon: "Gem",
                color: "from-cyber-plasma to-cyber-cyan",
              },
            ].map((module, index) => (
              <div
                key={module.name}
                className="module-card p-6 rounded-2xl text-center animate-cyber-float relative group"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div
                  className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${module.color} rounded-full flex items-center justify-center cyber-glow group-hover:animate-cyber-pulse`}
                >
                  <Icon
                    name={module.icon as any}
                    size={24}
                    className="text-black"
                  />
                </div>
                <h3 className="font-orbitron font-semibold text-sm text-cyber-cyan group-hover:text-white transition-colors">
                  {module.name}
                </h3>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-cyber-magenta/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
