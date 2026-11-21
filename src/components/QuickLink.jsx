import { useEffect, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import QuickLinkForm from "./QuickLinkForm";

const DEFAULT_LINKS = [
  { id: 1, name: "GitHub", url: "https://github.com" },
  { id: 2, name: "YouTube", url: "https://youtube.com" },
];
const QuickLink = () => {
  const [links, setLinks] = useState(() => {
    const savedLinks = JSON.parse(localStorage.getItem("quick_links"));

    if (savedLinks && savedLinks.length > 0) {
      return savedLinks;
    }

    return DEFAULT_LINKS;
  });

  useEffect(() => {
    localStorage.setItem("quick_links", JSON.stringify(links));
  }, [links]);

  const handledDelete = (event, id) => {
    event.preventDefault();
    setLinks((prevLinks) => prevLinks.filter((prevLink) => prevLink.id !== id));
  };
  return (
    <div className="quick-links-container">
      <div className="quick-links">
        {links.map((link) => (
          <a key={link.id} href={link.url} className="link-item">
            <button
              onClick={(event) => handledDelete(event, link.id)}
              className="delete-link-btn"
            >
              <FaTimes />
            </button>
            <div className="link-icon">
              <img
                src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=64`}
                alt={link.name}
                className="custom-favicon"
              />
            </div>
            <span className="link-name">{link.name} </span>
          </a>
        ))}
        <button onClick className="link-item">
          <div className="link-icon">
            <FaPlus className="react-icon-svg" />
          </div>
          <span className="link-name">Add</span>
        </button>
      </div>
      <QuickLinkForm />
    </div>
  );
};

export default QuickLink;
