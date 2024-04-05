import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, TouchableOpacity } from 'react-native';
import { Card, Paragraph, Title, Provider } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import { ScrollView } from 'react-native';

export default function LetterGenerator() {
  const [senderName, setSenderName] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [date, setDate] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientTitle, setRecipientTitle] = useState('');
  const [recipientCompany, setRecipientCompany] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [salutation, setSalutation] = useState('');
  const [body, setBody] = useState('');
  const [closing, setClosing] = useState('');
  const [enclosures, setEnclosures] = useState('');
  const [subjectLine, setSubjectLine] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [cc, setCC] = useState('');

  const getHtmlContent = () => {
    return `
      <html>
        <head>
          <title>${subjectLine}</title>
        </head>
        <body>
          <p><strong>${senderName}</strong></p>
          <p>${senderAddress}</p>
          <p>Phone: ${senderPhone}</p>
          <p>Email: ${senderEmail}</p>
          <p>Date: ${date}</p>
          <br />
          <p>${recipientName}</p>
          <p>${recipientTitle}</p>
          <p>${recipientCompany}</p>
          <p>${recipientAddress}</p>
          <br />
          <p>${salutation}</p>
          <br />
          <p>${body}</p>
          <br />
          <p>${closing}</p>
          <br />
          <p>${enclosures ? `Enclosures: ${enclosures}` : ''}</p>
          <p>${subjectLine ? `Subject: ${subjectLine}` : ''}</p>
          <p>${referenceNumber ? `Ref: ${referenceNumber}` : ''}</p>
          <p>${cc ? `CC: ${cc}` : ''}</p>
        </body>
      </html>`;
  };

  const downloadAsPdf = async () => {
    try {
      const htmlContent = getHtmlContent();
      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
      });
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.error('Error printing:', error);
    }
  };
  const CustomAlert = ({ title, message }) => {
    return (
      <View style={styles.alert}>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Content>{message}</Alert.Content>
      </View>
    );
  };

  const generatePDF = async () => {
    if (!senderName || !date || !recipientName || !salutation || !body || !closing) {
      Alert.alert('Error', 'Please fill in all required fields (marked with *)');
      return;
    }

    try {
      const htmlContent = getHtmlContent();
      const { uri } = await Print.printToFileAsync({ html: htmlContent });

      const destination = `${FileSystem.documentDirectory}letter.pdf`;

      await FileSystem.moveAsync({
        from: uri,
        to: destination,
      });

      Alert.alert('Success', 'Letter PDF generated successfully');
      downloadAsPdf();
    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert('Error', 'Failed to generate PDF');
    }
  };

  return (
    <Provider>
      <ScrollView style={[styles.container, { marginTop: 50, marginBottom: 30 }]}>
        <Card>
          <Card.Content>
            <Title>Letter Generator</Title>
          <TextInput
    style={styles.input}
    placeholder="*Sender's Name"
    value={senderName}
    onChangeText={setSenderName}
  />
  <TextInput
    style={styles.input}
    placeholder="Sender's Address"
    value={senderAddress}
    onChangeText={setSenderAddress}
  />
  <TextInput
    style={styles.input}
    placeholder="Sender's Phone"
    value={senderPhone}
    onChangeText={setSenderPhone}
  />
  <TextInput
    style={styles.input}
    placeholder="Sender's Email"
    value={senderEmail}
    onChangeText={setSenderEmail}
  />
  <TextInput
    style={styles.input}
    placeholder="*Date (e.g., April 1, 2024)"
    value={date}
    onChangeText={setDate}
  />
  <TextInput
    style={styles.input}
    placeholder="*Recipient's Name"
    value={recipientName}
    onChangeText={setRecipientName}
  />
  <TextInput
    style={styles.input}
    placeholder="Recipient's Title"
    value={recipientTitle}
    onChangeText={setRecipientTitle}
  />
  <TextInput
    style={styles.input}
    placeholder="Recipient's Company"
    value={recipientCompany}
    onChangeText={setRecipientCompany}
  />
  <TextInput
    style={styles.input}
    placeholder="Recipient's Address"
    value={recipientAddress}
    onChangeText={setRecipientAddress}
  />
  <TextInput
    style={styles.input}
    placeholder="*Salutation (e.g., Dear Mr. Smith,)"
    value={salutation}
    onChangeText={setSalutation}
  />
  <TextInput
    style={[styles.input, { height: 200 }]}
    placeholder="*Body"
    multiline
    value={body}
    onChangeText={setBody}
  />
  <TextInput
    style={styles.input}
    placeholder="*Closing (e.g., Sincerely,)"
    value={closing}
    onChangeText={setClosing}
  />
  <TextInput
    style={styles.input}
    placeholder="Enclosures"
    value={enclosures}
    onChangeText={setEnclosures}
  />
  <TextInput
    style={styles.input}
    placeholder="Subject Line"
    value={subjectLine}
    onChangeText={setSubjectLine}
  />
  <TextInput
    style={styles.input}
    placeholder="Reference Number"
    value={referenceNumber}
    onChangeText={setReferenceNumber}
  />
  <TextInput
    style={styles.input}
    placeholder="CC"
    value={cc}
    onChangeText={setCC}
  />
  
  <TouchableOpacity onPress={generatePDF}  style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>Download as PDF</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 200,
  },
  
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  downloadButton: {
    backgroundColor: '#E30AB8',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});