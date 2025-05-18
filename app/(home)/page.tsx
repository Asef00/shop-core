import SectionSlider from './SectionSlider';
import SectionCategory from './SectionCollection';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full">
        <SectionSlider />
        <SectionCategory />
      </main>
    </div>
  );
}
