import axiosClient from './axiosClient';

const getProducts = async (query) => {
    const { sortType, page, limit } = query;
    const res = await axiosClient.get(
        `/product?sortType=${sortType}&page=${page}&${limit}`,
    );
    return res.data;
};
export { getProducts };
