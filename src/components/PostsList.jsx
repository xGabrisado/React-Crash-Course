import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={changeBodyHandler}
  //         onAuthorChange={changeAuthorHandler}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Maximillian" body="Go watch the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
