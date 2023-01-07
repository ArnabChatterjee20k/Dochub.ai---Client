import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export default function ImageCard({ link }) {
  const copyLink = () => {
      navigator.clipboard.writeText(link);
      alert("link copied")
  };
  return (
    <ImageListItem key={link}>
      <img src={link} alt={link} loading="lazy" />
      <ImageListItemBar
        title={link}
        subtitle="copy the text using copy"
        actionIcon={
          <IconButton
            onClick={copyLink}
            sx={{ color: "rgba(255, 255, 255)" }}
          >
            <ContentCopyIcon sx={{fontSize:"2rem"}}/>
          </IconButton>
        }
      />
    </ImageListItem>
  );
}
