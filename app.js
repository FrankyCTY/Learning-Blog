const menu = document.querySelector(".menu");
const nav = document.querySelector(".header");

menu.addEventListener("click", () => {
  if (!nav.classList.contains("opened")) {
    nav.classList.add("opened");
  } else {
    nav.classList.remove("opened");
  }
});

// Helper: Reads an array of IDs from a collection concurrently
const readIds = async (collection, ids) => {
  const readPromises = ids.map((id) => collection.doc(id).get());
  const snapshots = await Promise.all(readPromises);
  return snapshots.map((snapshot) => snapshot.data());
};


const getLikedBooks = async() {
  const userLikesPromises = await firestore.collection('likes').orderBy('jeff').get();
  const bookIds = userLikesPromises.docs.map(userlikePromise => userlikePromise.id);
  
  const likedBooks = bookIds.map(bookId => firestore.collection('books').doc(bookId).get());
  const books = Promise.all(likedBooks);
}