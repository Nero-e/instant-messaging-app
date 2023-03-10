import Head from "next/head";

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-ghost-white dark:bg-rich-black selection:bg-[#1C1E30] selection:text-ghost-white dark:selection:bg-ghost-white-100 dark:selection:text-rich-black">
        <div className="flex min-h-full flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col mx-auto w-full max-w-xs px-4 md:px-8 gap-4">
            <div className="mb-6 flex justify-center">
              <h1 className="text-3xl font-bold text-rich-black dark:text-ghost-white">
                Sign up
              </h1>
            </div>
            <form className="flex flex-col gap-4" action="post">
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-ghost-white-100 outline-1 text-rich-black outline-rich-black px-3 py-1.5 transition-all dark:bg-[#1C1E30] dark:outline-ghost-white-100 dark:text-ghost-white"
              />
              <input
                required
                type="password"
                placeholder="Password"
                className="w-full rounded-lg bg-ghost-white-100 outline-1 text-rich-black outline-rich-black px-3 py-1.5 transition-all dark:bg-[#1C1E30] dark:outline-ghost-white-100 dark:text-ghost-white"
              />
              <div
                role="separator"
                className="w-full h-px visible border border-ghost-white-100 dark:border-[#1C1E30]"
              ></div>
              <div>
                <button className="flex justify-center items-center w-full rounded-lg py-1.5 px-4 bg-ghost-white outline-rich-black text-rich-black active:scale-[0.98] transition-all border-2 border-ghost-white-100 dark:bg-rich-black dark:outline-ghost-white dark:text-ghost-white dark:border-[#1C1E30]">
                  <svg className="w-[16px] h-[16px] mr-2" viewBox="0 0 20 20">
                    <g>
                      <path
                        d="M19.9996 10.2297C19.9996 9.54995 19.9434 8.8665 19.8234 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9996 13.2722 19.9996 10.2297Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="M10.2002 20.0003C12.9518 20.0003 15.2723 19.1147 16.963 17.5862L13.6753 15.0875C12.7606 15.6975 11.5797 16.0429 10.2039 16.0429C7.54224 16.0429 5.28544 14.2828 4.4757 11.9165H1.08301V14.4923C2.81497 17.8691 6.34261 20.0003 10.2002 20.0003Z"
                        fill="#34A853"
                      ></path>
                      <path
                        d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M10.2002 3.95756C11.6547 3.93552 13.0605 4.47198 14.1139 5.45674L17.0268 2.60169C15.1824 0.904099 12.7344 -0.0292099 10.2002 0.000185607C6.34261 0.000185607 2.81497 2.13136 1.08301 5.51185L4.47195 8.08764C5.27795 5.71762 7.53849 3.95756 10.2002 3.95756Z"
                        fill="#EA4335"
                      ></path>
                    </g>
                  </svg>
                  Aqui va Google c:
                </button>
              </div>
              <div>
                <button className="flex justify-center w-full rounded-lg py-1.5 px-4 bg-rich-black outline-ghost-white-100 text-ghost-white hover:bg-[#1C1E30] active:scale-[0.98] transition-all dark:bg-ghost-white dark:outline-[#1C1E30] dark:text-rich-black dark:hover:bg-ghost-white-100 font-bold">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div
            role="separator"
            className="w-px h-[300px] md:flex hidden visible border border-ghost-white-100 dark:border-[#1C1E30]"
          ></div>
          <div className="md:flex md:flex-col hidden mx-8 w-full max-w-xs px-4">
            <div className="flex flex-col w-[264px] h-[264px] justify-center items-center bg-ghost-white-100 dark:bg-[#1C1E30] rounded-full text-rich-black dark:text-ghost-white font-bold transition-all">
              QRCODE
            </div>
          </div>
          <div className="absolute bottom-6 left-0 w-full flex justify-center items-center text-rich-black dark:text-ghost-white">
            Make with
            <svg
              className="fill-raspberry h-[16px] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
