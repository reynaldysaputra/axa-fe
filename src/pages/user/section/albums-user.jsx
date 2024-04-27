import React from "react";
import Accordion from "../../../components/accordion";
import CardAlbum from "../../../components/card-album";

function AlbumsUserSection({ userAlbums }) {
  return (
    <div>
      <Accordion
        title={"Albums"}
        answer={
          <div className="w-full flex flex-wrap gap-10 my-5">
            {userAlbums.length ? (
              userAlbums.map((album) => (
                <CardAlbum key={album.id} album={album} />
              ))
            ) : (
              <h1 className="px-5 font-bold">No Albums User!</h1>
            )}
          </div>
        }
      />
    </div>
  );
}

export default AlbumsUserSection;
