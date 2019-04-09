clear;clc

function green = G2(x,xo,L)

  a = 0.5*(exp(-xo+2*L)-exp(L+xo))  /(1-exp(2*L));
  b = 0.5*(exp(xo)-exp(-xo+L))      /(1-exp(2*L));
  c = 0.5*(exp(-xo)-exp(xo+L))      /(1-exp(2*L));
  d = 0.5*(exp(xo+2*L)-exp(-xo+L))  /(1-exp(2*L));
  
  N = length(x);
  if N == 1
      if x<=xo
        green = a*exp(x) + b*exp(-x);
      end
      if x>xo
        green = c*exp(x) + d*exp(-x);
      end
  end
  
  if N > 1
      green = zeros(1,N);
      for n=1:N
          if x(n)<=xo
            green(n) = a*exp(x(n)) + b*exp(-x(n));
          end
          if x(n)>xo
            green(n) = c*exp(x(n)) + d*exp(-x(n));
          end
      end
  end
  
end


function y = u(n,L,x)

   k = 2*pi*n/L;
   y = sqrt(2/L) * sin(k*x);
   y = y';
   
end

function y = v(n,L,x)

   k = pi/L + 2*pi*n/L;
   y = sqrt(2/L) * cos(k*x);
   y = y';
   
end

function a = lambdaU(n,L)

    a = -(2*pi*n/L)^2;
    
end

function a = lambdaV(n,L)

    a = -(pi/L + 2*pi*n/L)^2;
    
end

L = 2;
N = 100;
d = L/N;
x  = -L/2:d:(L/2-d);
G = zeros(N,N);
xo = -0.5;
subplot(2,1,1)
cla
for n = 1:N
    G = G + (u(n,L,x) * u(n,L,xo)') / (lambdaU(n,L) -1);
end
for n = 0:N
    G = G + (v(n,L,x) * v(n,L,xo)') / (lambdaV(n,L) -1);
end
plot(x,G(:,N/2+2),'r')
hold on
subplot(2,1,2)
plot(x,G2(x,xo,L),'b')
hold off
