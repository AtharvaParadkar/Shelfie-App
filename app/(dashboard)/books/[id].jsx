import { StyleSheet, Text, View } from 'react-native'

import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'

const BookDetails = () => {
    const { id } = useLocalSearchParams()

    const [books, setBook] = useState(null)

    const { fetchBookById } = useBooks()

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBookById(id)
            setBook(bookData)
        }

        loadBook()
    }, [id])

    if (!books) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{books.title}</ThemedText>
                <ThemedText>Written by {books.author}</ThemedText>
                <Spacer />

                <ThemedText title={true}>Book Description:</ThemedText>
                <Spacer height={10} />

                <ThemedText>{books.description}</ThemedText>
            </ThemedCard>
        </ThemedView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch"
    },
    title: {
        fontSize: 22,
        marginVertical: 10
    },
    card: {
        margin: 20
    }
})