clear;clc;cla;

L = 20;
N = 400;
vel = 1;
d = L/N;
x = -L/2:d:L/2-d;
k = (-pi*N/L):(2*pi/L):(pi*N/L);
w = (vel*abs(k));
A = 0*(1/L)*sin(k);
A(N/2+3)=1;

subplot(3,1,1);
plot(k,abs(A));

for t = 0:0.1:30
    phi = 0;
    for n = 1:N
        fase = w(n)*t-k(n)*x;
        phi = phi + A(n)*exp(-i*fase) + conj(A(n))*exp(i*fase);
    end
    subplot(3,1,2);
    plot(x,phi);
    ylim([-2,2]);
    pause(0.01);
end
