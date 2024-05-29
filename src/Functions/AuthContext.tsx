import React, { createContext, useContext, useState } from 'react';

// Utwórz typ dla kontekstu autoryzacji
interface AuthContextType {
    nickName: string | null;
    setNickName: React.Dispatch<React.SetStateAction<string | null>>;
}

// Utwórz AuthContext z domyślnymi wartościami
const AuthContext = createContext<AuthContextType>({
    nickName: null,
    setNickName: () => {}, // domyślna funkcja, która nic nie robi
});

// Utwórz komponent AuthProvider
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [nickName, setNickName] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{ nickName, setNickName }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook do używania AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
