import { StyleSheet, Text, View } from 'react-native'

import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedButton from '../../../components/ThemedButton'
import { Colors } from '../../../constants/Colors'

const BookDetails = () => {
    const { id } = useLocalSearchParams()

    const [books, setBook] = useState(null)

    const { fetchBookById, deleteBook } = useBooks()

    const router = useRouter()

    const handleDelete = async () => {
        await deleteBook(id)
        setBook(null)
        router.replace('/books')
    }

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

            <ThemedButton style={styles.delete} onPress={handleDelete}>
                <Text style={{ color: '#fff', textALign: 'center' }}>
                    Delete Book
                </Text>
            </ThemedButton>

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
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: 'center'
    }
})