function waitTwoSeconds () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('we done here');
    }, 2000);
  })
}
async function weDoneYet () {
  console.log('calling waitTwoSeconds');
  const result = await waitTwoSeconds();
  console.log(result);
  return 'I think we done';
}

weDoneYet();
