import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ClipLoader} from "react-spinners";
import {IBook} from "../../models/IBook";
import {apiService} from "../../services/api.service";
import styles from './Books.module.css'

const Books = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalBooks, setTotalBooks] = useState(0)
    const [page, setPage] = useState(1)
    const [error, setError] = useState('')
    const loadMoreRef = useRef<HTMLDivElement | null>(null)
    const hasMore = books.length < totalBooks

    const loadBooks = useCallback(async (pageToLoad: number) => {
        setIsLoading(true)
        setError('')
        try {
            const {entities, total} = await apiService.bookService.getBooks(pageToLoad)
            setBooks(currentBooks => pageToLoad === 1 ? entities : [...currentBooks, ...entities])
            setTotalBooks(total)
            setPage(pageToLoad)
        } catch {
            setError('Could not load books')
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        loadBooks(1)
    }, [loadBooks])

    useEffect(() => {
        const loadMoreElement = loadMoreRef.current
        if (!loadMoreElement || isLoading || !hasMore) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                loadBooks(page + 1)
            }
        }, {rootMargin: '240px'})

        observer.observe(loadMoreElement)
        return () => observer.disconnect()
    }, [hasMore, isLoading, loadBooks, page])

    return (
        <div>
            <img src="https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg"
                 alt="books" className={styles.mainImage}/>

            {isLoading && <div className="statusBlock"><ClipLoader size={50}/></div>}

            {!isLoading && books.length === 0 &&
                <p className="statusBlock">No books yet</p>}

            {error && <p className="statusBlock">{error}</p>}

            <div className={styles.bookBlock}>{books.map(book =>
                <div className={styles.innerBlock} key={book._id}>
                    <img
                        src={book.photo || "https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small_2x/illustration-of-book-icon-free-vector.jpg"}
                        alt="book" className={styles.bookImage}/>
                    <h3 className={styles.bookName}>{book.name}</h3>
                    <p className={styles.bookAuthor}>{book.author?.name}</p>
                    <p className={styles.bookPrice}>{book.price} $</p>
                </div>)}
            </div>

            <div ref={loadMoreRef} className={styles.loadMore} aria-hidden="true">
                {isLoading && books.length > 0 && (
                    <ClipLoader size={30}/>
                )}
            </div>
        </div>
    );
};

export default Books;