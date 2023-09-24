
import Services, { EndPoints } from "../Services";
const { getApi, postApi } = Services;
const { TODO_LIST } = EndPoints;

export const getTodoList = async () => {
    try {
        const response = await getApi(TODO_LIST.get)
        return response
    } catch (err) {
        console.log("err", err)

    }
}

export const postTodoList = async (list) => {
    try {
        const response = await postApi(TODO_LIST.create, list)
        return response
    }
    catch (err) {
        console.log("posterr", err)
    }
}