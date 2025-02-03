import React from "react";
import Article from "./Article";

function ArticleList (props) {
    console.log("props", props)
    return (
        <div>
            <main>
                {
                   props.posts instanceof Array ? props.posts.map((item)=>{
                        return <Article key={item.id}  title={item.title} date={item.date}  preview={item.preview}  />
                    }) : <Article key={props.id} title={props.title} date={props.date} preview={props.preview} />
                }
            </main>
        </div>
    )
}export default ArticleList