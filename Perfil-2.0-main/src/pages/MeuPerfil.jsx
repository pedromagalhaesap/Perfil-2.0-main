

export const MeuPerfil = () => {
    return (
        <header className="flex  bg-[url('assets/img/Fundo.png')] opa bg-cover bg-center flex-col justify-center items-center h-full">
            <div className="backdrop-grayscale-0 bg-white/20">
                <div className=" flex flex-col justify-center text-center pt-4 items-center h-full w-auto">

                    <div className="bg-[url('assets/img/Perfil.jpg')]  flex-none bg-cover w-40 h-40 bg-bottom rounded-full  border-2 border-blue-300"> </div>

                    <div className="pt-4 flex-1 text-black font-semibold   ">
                        <div className=" text-sm flex flex-col ">
                            <p className="text-lg font-bold flex-auto">Bernardo Santos </p>
                            <p className="flex-1 -mt-10">Programador | Desenvolvedor</p>
                            <div className="text-[8px] flex-auto">Contato: <span className="font-bold tracking-[0.7px]">bernardosantosmagalhaesm@gmail.com</span></div>
                        </div>
                    </div>

                    <div className=" w-full p-4 flex flex-col flex-1">

                        <a className="bg-slate-400 mb-4 p-2 shadow-md shadow-black rounded-3xl text-base font-bold  border-black hover:scale-95 border-2 border-solid" href="https://drive.google.com/file/d/1S4JU7REEktPw1muxmOrXPdivdT_WQEJb/view?usp=sharing">Curriculo</a>

                        <a className=" bg-slate-400 mb-4 p-2 shadow-md shadow-black rounded-3xl text-base font-bold border-black hover:scale-95 border-2 border-solid" href="https://www.linkedin.com/in/bernardo-santos-magalhaes/">Linkedin</a>

                        <a className=" bg-slate-400 mb-4 p-2 shadow-md shadow-black rounded-3xl text-base font-bold border-black hover:scale-95 border-2 border-solid" href="https://github.com/BernardoSant">GitHub</a>

                        <a className=" bg-slate-400 mb-4 p-2 shadow-md shadow-black rounded-3xl text-base font-bold border-black hover:scale-95 border-2 border-solid" href="https://www.instagram.com/bernardo_santos.m/">Instagram</a>
                    </div>


                    <div className="flex justify- items-end flex-1 h-auto ">
                        <p className="text-[9px] text-black bg-slate-500  font-normal px-6 h-auto py-2">
                            Tudo posso naquele que me fortalece! - &copy; 2023 - Bernardo Santos. Todos os direitos Reservados.
                        </p>
                    </div>
                </div>

            </div>

        </header>
    )
}