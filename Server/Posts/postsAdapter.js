import { ObjectId } from 'mongodb';
import mongoclient from '../db/db.js';

const collection = mongoclient.db('posts').collection('post');

//post
const save = async ({ name, age, gender }) => {
    const data = { name, age, gender }
    await collection.insertOne(data);
    return data;
}

//getAll
const getAll = async () => {
    const cursor = await collection.find();
    const posts = [];
    await cursor.forEach(data => {
        posts.push(data)
    })
    return posts;
}

//getById
const getById = async (id) => {

    const data = await collection.findOne({ _id: ObjectId(id) });
    return data

}

//update
const updateById = async (id, data) => {
    const { name, age, gender } = data;

    await collection.findOneAndUpdate({ _id: ObjectId(id) }, { $set: { name: name, age: age, gender: gender } }, { upsert: true });
    const update = await collection.findOne({ _id: ObjectId(id) });
    return update;

}


//delete
const deleteOne = async (id) => {

    const data = await collection.deleteOne({ _id: ObjectId(id) });
    return data;



}

//getDetailsByName
const getByName = async ({ names }) => {
    console.log(names);
    const data = await customerCollection.findOne({ 'name': names });
    console.log(data);
    return data;
}

export { save, getAll, getById, updateById, deleteOne, getByName };