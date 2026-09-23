import { Blocks } from "react-loader-spinner";


const loading = () => {



    return (
        <>
            <div className="text-center font-bold my-10 text-7xl flex flex-col items-center justify-center gap-3">
<Blocks
                    height="300"
                    width="200"
                    color="#4fa94d"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                />
                <h1 className="font-bold my-10 text-7xl"> Loading.......</h1>
            </div>

        </>
    );
};

export default loading;