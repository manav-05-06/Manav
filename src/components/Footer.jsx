function Footer() {
    const now = new Date();
 
  return (
    <footer className=" font-mono mt-20 py-6 text-center text-gray-600 dark:text-gray-400">
      <p>&copy; {now.toLocaleTimeString()} Made by - Manav</p>
    </footer>
  )
}

export default Footer
