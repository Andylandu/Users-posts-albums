import React from 'react';
import classes from './Posts.module.css';

const Posts = ({ users, posts }) => {
    const displayPosts = posts.map((post) => (
        <div key={post.id} className={classes.card}>
                <div className={classes.card__title}>
                    {post.id}. <strong>{post.title}</strong>
                </div>
                <div className={classes.row}>
                    <h5>Заглавие:</h5>
                    <p>{post.title}</p>
                </div>
                <div className={classes.row}>
                    <h5>Тело:</h5>
                    <p>{post.body}</p>
                </div>
                <div className={classes.row}>
                    <h5>Автор:</h5>
                    {users.map((user) => user.id === post.userId 
                        ? (
                            <div key={user.id}>
                                <strong >{user.name}</strong>
                            </div>
                        ) 
                        : null)}
                </div>
            </div>
    ));

    return (
        <div className={classes.content}>
            {displayPosts}
        </div>
    );
};

export default Posts;