import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Creative Digital <br className="hidden md:block" /> Agency
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Tempat Anda Menemukan Berbagai Solusi Digital dan Teknologi Terbaik untuk
              Mendukung Pertumbuhan dan Kesuksesan Bisnis Anda!
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-base px-6 py-2">
                Kontak ↗
              </Button>
              <Button variant="outline" className="text-base px-6 py-2">
                Portfolio
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full flex justify-center md:justify-end">
              <img
                src="/img/icon/hero.png"
                alt="Diagram"
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
