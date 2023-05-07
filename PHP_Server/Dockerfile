FROM php:7.4-apache

# Enable mod_rewrite and set the webroot to /var/www/html/public
RUN a2enmod rewrite \
    && sed -i -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/000-default.conf \
    && sed -i -e 's!/var/www/!/var/www/html/public!g' /etc/apache2/apache2.conf \
    && sed -i 's/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Install Composer and required extensions
RUN apt-get update && apt-get install -y git zip unzip libpq-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql

RUN apt-get install -y libzip-dev && \
    docker-php-ext-install zip && \
    pecl install phalcon && \
    docker-php-ext-enable phalcon

# Copy the application code and configuration files
COPY . /var/www/html

# Set permissions for the application directory
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html \
    && find /var/www/html -type d -exec chmod g+s {} \;
