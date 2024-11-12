import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  static const String baseUrl = 'http://10.0.2.2:3000/api';

  // Login functionality

  static Future<Map<String, dynamic>> login(
      String regNumber, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/login'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'regNumber': regNumber, 'password': password}),
    );
    return response.statusCode == 200
        ? jsonDecode(response.body)
        : {'success': false, 'message': 'Login failed'};
  }

  //  send otp functinality

  static Future<Map<String, dynamic>> sendOtp(String email) async {
    final response = await http.post(
      Uri.parse('$baseUrl/send-otp'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email}),
    );
    return response.statusCode == 200
        ? jsonDecode(response.body)
        : {'success': false, 'message': 'Failed to send OTP'};
  }

  // verify otp functionality

  static Future<Map<String, dynamic>> verifyOtp(
      String email, String otp) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/verify-otp'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'email': email, 'otp': otp}),
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        return {
          'success': false,
          'message': response.body.isNotEmpty
              ? jsonDecode(response.body)['message']
              : 'Failed to verify OTP'
        };
      }
    } catch (e) {
      return {'success': false, 'message': 'Error: $e'};
    }
  }

  // Password reset functionality

  static Future<Map<String, dynamic>> resetPassword(
      String email, String newPassword) async {
    final response = await http.post(
      Uri.parse('$baseUrl/reset-password'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'newPassword': newPassword}),
    );
    return response.statusCode == 200
        ? jsonDecode(response.body)
        : {'success': false, 'message': 'Password reset failed'};
  }

  // Get subordinates functionality

  static Future<Map<String, dynamic>> getAll() async {
    try {
      print('Fetching subordinates...'); // Debug log
      final response = await http.get(
        Uri.parse('$baseUrl/get-subordinates'),
        headers: {'Content-Type': 'application/json'},
      );

      print('Response status: ${response.statusCode}'); // Debug log
      print('Response body: ${response.body}'); // Debug log

      if (response.statusCode == 200) {
        final decodedResponse = json.decode(response.body);
        return {
          'success': true,
          'subordinates': decodedResponse['subordinates'] ?? []
        };
      } else {
        return {'success': false, 'message': 'Failed to fetch subordinates'};
      }
    } catch (e) {
      print('Error in getSubordinates: $e'); // Debug log
      return {'success': false, 'message': 'Error connecting to server'};
    }
  }

  // Add subordinate functionality

  static Future<Map<String, dynamic>> add(
    String name,
    String address,
    String contactNumber,
    String gender,
  ) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/add-subordinate'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'name': name,
          'address': address,
          'contactNumber': contactNumber,
          'gender': gender,
        }),
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        return {
          'success': false,
          'message': response.body.isNotEmpty
              ? jsonDecode(response.body)['message']
              : 'Failed to add subordinate'
        };
      }
    } catch (e) {
      return {'success': false, 'message': 'Error: $e'};
    }
  }

  // Update subordinate functionality

  static Future<Map<String, dynamic>> update(
    String id,
    String name,
    String address,
    String contactNumber,
    String gender,
  ) async {
    try {
      print('Updating subordinate: $id'); // Debug log
      print('Data: $name, $address, $contactNumber, $gender'); // Debug log

      final response = await http.put(
        Uri.parse('$baseUrl/update-subordinate/$id'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'name': name,
          'address': address,
          'contactNumber': contactNumber,
          'gender': gender,
        }),
      );

      print('Response status: ${response.statusCode}'); // Debug log
      print('Response body: ${response.body}'); // Debug log

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        return {
          'success': false,
          'message': response.body.isNotEmpty
              ? jsonDecode(response.body)['message']
              : 'Failed to update subordinate'
        };
      }
    } catch (e) {
      print('Error in update: $e'); // Debug log
      return {'success': false, 'message': 'Error: $e'};
    }
  }

  // Delete subordinate functionality

  static Future<Map<String, dynamic>> delete(String id) async {
    try {
      final response = await http.delete(
        Uri.parse('$baseUrl/delete-subordinate/$id'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        return {
          'success': false,
          'message': response.body.isNotEmpty
              ? jsonDecode(response.body)['message']
              : 'Failed to delete subordinate'
        };
      }
    } catch (e) {
      return {'success': false, 'message': 'Error: $e'};
    }
  }

  //Change password functionality

  static Future<Map<String, dynamic>> changePassword({
    required String regNumber,
    required String currentPassword,
    required String newPassword,
  }) async {
    try {
      final response = await http.post(
        // Changed to POST to match backend
        Uri.parse('$baseUrl/change-password'), // Updated endpoint
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'regNumber': regNumber,
          'oldPassword': currentPassword, // Changed to match backend
          'newPassword': newPassword,
        }),
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body);
      } else {
        final errorData = jsonDecode(response.body);
        return {
          'success': false,
          'message': errorData['message'] ?? 'Failed to change password'
        };
      }
    } catch (e) {
      return {'success': false, 'message': 'Error: $e'};
    }
  }
}
