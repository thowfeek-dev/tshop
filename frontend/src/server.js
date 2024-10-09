// export const server = "http://localhost:8000/api/v2";
// export const backend_url = "http://localhost:8000/";


// const isDevelopment = process.env.NODE_ENV === "DEVELOPMENT";
// export const server = isDevelopment ? "http://localhost:8000/api/v2" : "https://tshop-psi.vercel.app/api/v2";
// export const backend_url = isDevelopment ? "http://localhost:8000/" : "https://tshop-psi.vercel.app/";




const isDevelopment = process.env.NODE_ENV?.toLowerCase() === "development";


export const server = isDevelopment ? "http://localhost:8000/api/v2" : "https://tshop-psi.vercel.app/api/v2";
export const backend_url = isDevelopment ? "http://localhost:8000/" : "https://tshop-psi.vercel.app/";
