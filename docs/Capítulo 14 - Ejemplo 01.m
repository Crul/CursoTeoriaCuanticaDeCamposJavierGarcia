N = 200;
clc
a = 2;
A = [a -1 zeros(1,N-2) ; -1 a -1 zeros(1,N-3)];
for j=1:(N-3) A = [A ; zeros(1,j) -1 a -1 zeros(1,N-3-j)];
end
A = [A ; zeros(1,N-2) -1 a];
% Matriz A
subplot(3,1,1)
maximo = max(abs(A));
imshow(abs(A)/maximo(1));
% Matriz G

subplot(3,1,2)
G = inv(A);
maximo = sum(max(G))/N;
imshow(0.5*abs(G)/maximo);

% Representación de la fila central
subplot(3,1,3)
plot(1:N,G(N/2,:))
