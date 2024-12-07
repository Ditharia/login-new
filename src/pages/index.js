import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <nav
        className="flex sticky top-0 z-20 bg-white flex-row justify-center items-center py-3"
        style={{
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)", // Adjust the values as needed
        }}
      >
        <div className="flex flex-row justify-between items-center max-w-8xl container">
          <div className="flex flex-row justify-center items-center gap-3">
            {/*Logo */}
            <Image
              src="https://cas.ipb.ac.id/cas/themes/siti/images/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-[#406CE7] font-bold text-2xl">UNISYST IPB</h1>
          </div>
          <div className="text-sm">KONTAK</div>
        </div>
      </nav>
      <div
        className="w-full flex justify-between pt-10  min-h-screen flex-col"
        style={{
          backgroundImage:
            "url('https://cas.ipb.ac.id/cas/themes/siti/images/pattern.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="w-full  flex flex-row justify-center items-center">
          <div className="flex flex-row max-w-4xl  container justify-between items-start ">
            <div className="max-w-md flex justify-center items-center flex-col ">
              <h1 className="text-4xl  text-blue-500">UNISYST IPB</h1>
              <p className="text-center  text-sm pb-10">
                Sistem Informasi Terintegrasi IPB atau sebuah sistem otentikasi
                dengan teknologi Single Sign-on (atau biasa disebut SSO) dengan
                menggunakan protokol OAuth 2.0.
              </p>
              <div className="space-x-4">
                <button className="px-5 text-sm   py-2.5 bg-[#406CE7] text-white rounded-sm hover:drop-shadow-xl shadow-sm shadow-purple-600 transition-all">
                  APA ITU SSO?
                </button>
                <button className="px-5  text-sm py-2.5 border border-[#406CE7] text-[#406CE7] hover:drop-shadow-xl shadow-sm shadow-purple-600 transition-all bg-white rounded-sm">
                  LAYANAN UNISYST IPB
                </button>
              </div>
            </div>

            <div className="max-w-xs  shadow-md shadow-slate-300  border bg-[rgb(239,239,239)]  p-6 space-y-4 flex flex-col justify-center items-start">
              <div className="w-full flex flex-col gap-5 py-10">
                <div className="flex flex-row justify-center items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="gray"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                  <input
                    placeholder="Username"
                    className="w-full py-2 text-sm   focus:border-[#406CE7] border-r-0 border-l-0 border-t-0 bg-[#EFEFEF] outline-none border-2"
                  ></input>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="gray"
                  >
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                  </svg>
                  <input
                    placeholder="Password"
                    type="password"
                    className=" w-full focus:border-[#406CE7] text-sm py-2 border-r-0 border-l-0 border-t-0 bg-[#EFEFEF] outline-none border-2"
                  ></input>
                </div>
              </div>
              <button className="w-full px-5 text-xs  py-3 bg-[#406CE7] text-white rounded-sm">
                LOGIN
              </button>
              <div className="flex flex-row  gap-1 items-center w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18px"
                  viewBox="0 -960 960 960"
                  width="18px"
                  fill="black"
                >
                  <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <p className="text-[#406CE7] text-sm">Forgot your password?</p>
              </div>
              <p className="text-sm">
                For security reasons, please{" "}
                <span className="text-[#406CE7] "> log out </span> and exit your
                web browser when you are done accessing services that require
                authentication!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-end ">
          <img
            src="https://cas.ipb.ac.id/cas/themes/siti/images/webdesign.png"
            className="max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}
