"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/Table";

const AdminPage = () => {
  const [contactData, setContactData] = useState([]);
  const [careerData, setCareerData] = useState([]);
  const [error, setError] = useState(null);
  const secretKey = "Dhiraj@45454"; // Replace with your actual secret key
  const [inputKey, setInputKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}api/getContacts`);
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContactData(data);
        // Log the IDs of each contact
        data.forEach(contact => {
          console.log(`Contact ID: ${contact._id}`);
        });
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchCareerData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}api/getCareers`);
        if (!response.ok) {
          throw new Error('Failed to fetch careers');
        }
        const data = await response.json();
        setCareerData(data);
        // Log the IDs of each career
        data.forEach(job => {
          console.log(`Career ID: ${job._id}`);
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchContactData();
    fetchCareerData();
  }, []);

  const handleKeySubmit = (e) => {
    e.preventDefault();
    if (inputKey === secretKey) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid secret key");
    }
  };

  const handleDeleteContact = async (id) => {
    console.log(`Attempting to delete contact with ID: ${id}`); // Log the ID
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}api/deleteContact/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }
      setContactData(contactData.filter(contact => contact._id !== id)); // Ensure you're using _id
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  const handleDeleteCareer = async (id) => {
    console.log(`Attempting to delete career with ID: ${id}`); // Log the ID
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}api/deleteCareer/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete career');
      }
      setCareerData(careerData.filter(job => job._id !== id)); // Ensure you're using _id
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="admin-container flex items-center justify-center min-h-screen bg-gray-100">
      {!isAuthenticated ? (
        <Card className="overflow-hidden shadow-lg rounded-lg">
          <CardContent className="p-6">
            <form onSubmit={handleKeySubmit} className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-center">Welcome Boss</h1>
              <div className="flex flex-col">
                <Label htmlFor="secretKey" className="text-lg">Secret Key</Label>
                <Input
                  id="secretKey"
                  type="text"
                  placeholder="Enter your secret key"
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  className="border rounded-md p-2"
                  required
                />
              </div>
              <Button type="submit" className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                Authenticate
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="container mx-32 py-6 space-y-8">
            <h1 className="text-2xl font-bold text-center">Dashboard</h1>

            <div className="space-y-6">
              <div className="rounded-lg border h-[400px] overflow-y-auto bg-card text-card-foreground shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-4">Contact Reviews</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone No</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactData.map((contact) => (
                        <TableRow key={contact._id}>
                          <TableCell>{contact.firstName}</TableCell>
                          <TableCell>{contact.lastName}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.phone}</TableCell>
                          <TableCell>{contact.message}</TableCell>
                          <TableCell>
                            <Button onClick={() => handleDeleteContact(contact._id)} className="bg-red-500 text-white">Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="rounded-lg border h-[400px] overflow-y-auto bg-card text-card-foreground shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-4">Career Enquiry</h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone No</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {careerData.map((job) => (
                        <TableRow key={job._id}>
                          <TableCell>{job.firstName}</TableCell>
                          <TableCell>{job.lastName}</TableCell>
                          <TableCell>{job.email}</TableCell>
                          <TableCell>{job.phone}</TableCell>
                          <TableCell>{job.resumeUrl}</TableCell>
                          <TableCell>
                            <Button onClick={() => handleDeleteCareer(job._id)} className="bg-red-500 text-white">Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage; 