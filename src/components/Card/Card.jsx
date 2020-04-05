import React from 'react';
import './Card.css';

const Card = () => {
return (
    <div className="container border m-2">
        <h3>Project name</h3>
        <p>deskription. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae unde magnam temporibus illum deleniti nemo sapiente ullam accusantium autem fugit a id perspiciatis quas cumque ipsum enim, sit ipsa similique.</p>
        <table className="table bordered  table-sm">
  <tbody>
    <tr>
    <td ></td>
      <td className="columNames">Status</td>
      <td className="columNames">Tasks</td>
      <td className="columNames">Edit</td>
      <td className="columNames">Delete</td>
    </tr>
    <tr>
    <td></td>
      <td>Not Started</td>
      <td><a href="#">20/20</a></td>
      <td><button class="buttonEdit">Edit</button></td>
      <td><button class="buttonDel">Delete</button></td>
    </tr>
    </tbody>
    </table>
    </div>
    );
}

export default Card;