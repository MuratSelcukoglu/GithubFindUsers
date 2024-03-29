import React, { useState, useContext } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      setAlert("Lütfen bir anahtar kelime giriniz.", "danger");
    } else {
      searchUsers(keyword);
      setKeyword("");
    }
  };

  return (
    <div className="container my-3">
      <form action="" onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={onChange}
            className="form-control"
            value={keyword}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>

      {users.length > 0 && (
        <div class="d-grid gap-2">
          <button
            onClick={clearUsers}
            className="btn btn-secondary btn-sm mt-2"
          >
            Clear Results
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
