import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { PostItem } from '../components/PostItem'
import axios from '../utils/axios'

export const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const {status} = useSelector((state) => state.post)

    const fetchMyPosts = async () => {
        try {
            const { data } = await axios.get('/posts/user/me')
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(status) toast(status)
        fetchMyPosts()
    },[status])

    return (
        <div className='w-1/2 mx-auto py-10 flex flex-col gap-10'>
            {posts?.map((post, idx) => (
                <PostItem post={post} key={idx} />
            ))}
        </div>
    )
}
