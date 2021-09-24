import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchData } from '../../../redux-store/action-creators/searchActions';

export const Search = () => {
  const [term, setTerm] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { searchTerm, searchResult } = useSelector((state) => state.searchNpm);

  const handleSearch = (e) => {
    e.preventDefault();
    if (term) {
      console.log('handleSearch');
      console.log('term', term);
      setTerm('');
      fetchNpmPkg(term);
    }
  };

  const fetchNpmPkg = async (term) => {
    dispatch(fetchSearchData(term));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const DisplaySearchResult = () => {
    if (!searchResult) return <p>Loading...</p>;
    if (searchResult.length === 0)
      return (
        <p>No library found for '{searchTerm}'. Try different search terms!</p>
      );

    return (
      <>
        <h2>List of the libraries found for '{searchTerm}':</h2>
        {searchResult && searchResult.map((item) => <p>{item.package.name}</p>)}
      </>
    );
  };

  return (
    <div style={{ margin: '24px 0' }}>
      <h2 style={{ margin: '24px 0' }}>NPM package library search</h2>
      <form onSubmit={handleSearch}>
        <Input
          ref={inputRef}
          value={term}
          name="search"
          placeholder="search npm packages"
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button>Search</Button>
        <DisplaySearchResult />
      </form>
    </div>
  );
};

const Input = styled.input`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;

  :focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 8px 12px;
  margin: 0 12px;
  border: none;
  border-radius: 4px;
  transition: all 0.2s;

  :hover {
    background-color: #333;
    color: #fff;
  }
`;
