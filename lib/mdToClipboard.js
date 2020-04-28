const markdownToString = code => {
  return code
    .map(text => {
      if (text instanceof Object) {
        if (text.props.children instanceof Object) {
          if (text.props.children.length > 1) {
            return markdownToString(text.props.children);
          }
          return text.props.children.props.children;
        }
        return text.props.children;
      }
      return text;
    })
    .flat()
    .join('');
};

const copyToClipboard = code => {
  const str = markdownToString(code);

  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export default copyToClipboard;
