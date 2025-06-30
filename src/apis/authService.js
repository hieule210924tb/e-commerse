import axiosClient from './axiosClient';

const register = async (body) => {
    return await axiosClient.post('/register', body);
};
const signIn = async (body) => {
    return await axiosClient.post('login', body);
};

const getInfo = async () => {
    return await axiosClient.get(
        '/use/info/f39e36c9-96f3-44fe-a711-d922e582959d',
    );
};
export { register, signIn, getInfo };
