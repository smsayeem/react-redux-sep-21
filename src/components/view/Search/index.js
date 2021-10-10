import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSearchData,
  deletePrevSearchResult,
} from '../../../redux-store/action-creators/searchActions';

export const Search = () => {
  const [term, setTerm] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { searchTerm, searchResult, loading } = useSelector(
    (state) => state.searchNpm
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (term) {
      // debugger;
      console.log('handleSearch');
      console.log('term', term);
      setTerm('');
      dispatch(deletePrevSearchResult());
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
    if (searchTerm === '') return null;
    if (loading) return <p>Loading...</p>;

    // search result is error string
    if (!Array.isArray(searchResult) && searchResult.length > 0) {
      return <p>{searchResult}</p>;
    }
    // search result is an empty array
    if (Array.isArray(searchResult) && searchResult.length === 0) {
      return (
        <p>No library found for '{searchTerm}'. Try different search terms!</p>
      );
    }
    // search result has data
    return (
      <>
        <h3 style={{ marginTop: '24px' }}>
          List of the libraries found for '{searchTerm}':
        </h3>
        <ResultContainer>
          {searchResult.map((item, index) => {
            console.log('item=', item);
            return (
              <Card key={item.name} index={index}>
                <h3>{item.package.name}</h3>
                <p>{item.package.description}</p>
                <p>
                  NPM link:{' '}
                  <a
                    href={item.package.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.package.links.npm}{' '}
                  </a>
                </p>
                <p>
                  Homepage:{' '}
                  <a
                    href={item.package.links.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.package.links.homepage}
                  </a>
                </p>
              </Card>
            );
          })}
        </ResultContainer>
      </>
    );
  };

  return (
    <PageContainer>
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
      </form>
      <DisplaySearchResult />
    </PageContainer>
  );
};
const PageContainer = styled.div`
  margin: 24px 0;
`;
const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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

const Card = styled.div`
  background: #ddd;
  padding: 12px;
  margin: 6px;
  width: 100%;
  border-radius: 6px;
  transition: var(--transition);

  @media (min-width: 1200px) {
    padding: 24px;
    margin: 12px 0;
    margin-left: ${(props) => (props.index % 2 === 0 ? 0 : '12px')};
    margin-right: ${(props) => (props.index % 2 === 0 ? '12px' : 0)};
    width: calc(50% - 12px);
  }
  :hover {
    background: #eee;
  }
`;
