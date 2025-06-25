export default function Hero() {
  return (
    <section className="bg-white border border-black/10 rounded-lg py-24 px-5 mt-40">
      <img src="/img/hero.svg" alt="Diagram" className="mx-auto px-4" />
      <div className="text-center flex flex-col items-center">
        <h1 className="font-semibold text-3xl lg:text-6xl lg:max-w-[15ch]">
          Creative Digital Agency
        </h1>
        <p className="text-black/60 mt-4 lg:text-lg max-w-[50ch]">
          Tempat Anda Menemukan Berbagai Solusi Digital dan Teknologi Terbaik
          untuk Mendukung Pertumbuhan dan Kesuksesan Bisnis Anda!
        </p>
        <div className="mt-6 flex justify-center gap-3 lg:gap-4 font-semibold lg:text-xl">
          <a
            className="bg-orange-500 hover:bg-orange-600 border border-orange-700 transition-colors duration-300 text-white px-5 py-3 rounded-lg"
            href="#"
          >
            Kontak ↗
          </a>
          <a
            className="px-5 py-3 rounded-lg border border-black/10 transition-colors duration-300"
            href="#"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
