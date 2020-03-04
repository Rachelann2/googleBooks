import React from "react";

const Card = (props) => {
    return (
        <div class="card">
            <div class="card-header">
                {props.bookObj.title}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{props.bookObj.description}</p>
                    <footer class="blockquote-footer">{props.bookObj.authors}</footer>

                </blockquote>
                <a href="#" class="btn btn-primary">Save</a>
            </div>
        </div>

    )


}


export default Card;