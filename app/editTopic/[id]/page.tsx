import EditTopicForm from "@/components/EditTopicForm";
import { ObjectId } from "mongoose";

const getTopicById = async(id:ObjectId) => {
    try {
        
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch topic.');
        }

        return res.json();

    } catch (error) {
        console.log(error);
    }
};

export default async function EditTopic({params}:any) {
    const { id } = params;
    const { topic } = await getTopicById(id);
    const { title, description } = topic;
    await getTopicById(id); 
    return <EditTopicForm id={id} title={title} description={description} />
}