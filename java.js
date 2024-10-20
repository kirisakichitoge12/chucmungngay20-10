
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  const text = `Hy vọng mỗi ngày đều là một ngày thật nhiều niềm vui và thành công đến với chị! 🎉✨`;
  const typingSpeed = 100; // Tốc độ gõ (ms)
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typingText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();