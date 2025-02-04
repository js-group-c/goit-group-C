import iziToast from 'izitoast';

export function showNoBooksWarning() {
  iziToast.show({
    message: 'There are no more books in this category',
    position: 'topRight',
    backgroundColor: '#EAC645',
  });
}