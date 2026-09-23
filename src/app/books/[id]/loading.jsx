import { Audio, Blocks } from 'react-loader-spinner'



const BookDetaisLoading = () => {



    return (
        <>
            <div className="flex flex-col justify-center items-center min-w-screen min-h-screen gap-3">
                {/* <span className="loading loading-infinity loading-xl"></span> */}
                <Blocks
                    height="300"
                    width="200"
                    color="#4fa94d"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                />
                <h1 className="text-center text-6xl font-bold">Book Details Loading</h1>
            </div>

        </>
    );
};

export default BookDetaisLoading;