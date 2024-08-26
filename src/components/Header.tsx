import Image from "next/image";
function Header() {
  return (
    <header className="bg-primary text-white py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <Image
          src="/typescript.svg"
          alt="TypeScript Logo"
          width={100}
          height={100}
          className="mb-4 bg-white"
        />
        <h1 className="text-4xl font-bold">Curso de TypeScript</h1>
      </div>
    </header>
  );
}

export default Header;
