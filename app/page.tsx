import Image from "next/image";
import SelectMenu from "./components/selectMenu";
import Menu from "./components/Menu";
import Maininfo from "./components/MainInfo";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mx-auto"
          src="/logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex w-full max-w-7xl m-auto flex-col">
        <h1 className="text-center mx-auto font-semibold text-2xl mt-1">
          Planilha de Cálculo de Pontos por Caso de Uso
        </h1>

        <div className="bg-blue-500 mt-5">
          <p
            className="text-white text-md p-1 font-bold
          text-center"
          >
            Identificação
          </p>
        </div>
        <div>
          <div className="flex justify-start gap-10 items-center mt-2   px-2 py-1 ">
            <div className=" ">
              <p className="font-bold min-w-[300px]   ">Clientes</p>
            </div>
            <div>
              <input
                type="text"
                name="text"
                id="text"
                className="  border-0  w-[200px]  py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="#REF!"
              />
            </div>
            <div className="flex gap-10 ">
              <p className="font-bold min-w-[200px]">Data de Elaboração</p>
              <p className="text-gray-400">Preencha os Campos</p>
            </div>
          </div>
          <div className="flex justify-start gap-10  items-center mt-2   px-2 py-1  ">
            <div className=" ">
              <p className="font-bold min-w-[300px]  ">Gerente de Projeto</p>
            </div>
            <div>
              <SelectMenu />
            </div>
            <div className="flex gap-10">
              <p className="font-bold min-w-[200px]">Data de Atualização</p>
              <p className="text-gray-400">Preencha os Campos</p>
            </div>
          </div>
          <div className="flex justify-start gap-10  items-center mt-2   px-2 py-1  ">
            <div className=" ">
              <p className="font-bold min-w-[300px]  ">Titulo da Proposta</p>
            </div>

            <div>
              <SelectMenu />
            </div>

            <div className="flex gap-10">
              <p className="font-bold min-w-[200px]">Nr. de Revisão</p>
              <p className="text-gray-400">Preencha os Campos</p>
            </div>
          </div>
        </div>
        <Menu />
        <div className="mt-5 ">
          <Maininfo />
        </div>
      </div>
    </main>
  );
}
