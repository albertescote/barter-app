import Image from 'next/image';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function Home({ params: { lng } }: PageParams) {
  return (
    <main>
      <section className="h-[75vh] bg-gradient-to-r from-[#e6f0ff] to-[#e6f8ff] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">
                Trisbar is coming soon
              </h1>
              <p className="mt-4">
                We are currently building Trisbar, a platform where you can
                exchange goods and services without the need for cash. Stay
                tuned for more information on the launch and how to
                pre-register.
              </p>
            </div>
            <div>
              <Image
                alt="Barter Concept"
                className="w-full rounded-lg object-cover"
                height="400"
                src="/main-barter.jpg"
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
